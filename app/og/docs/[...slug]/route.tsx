import { getPageImage, source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';
import { generate as DefaultImage } from 'fumadocs-ui/og';

export const revalidate = false;

let logoDataUrl: string | null = null;

async function ensureLogoDataUrl(requestUrl: string) {
  if (logoDataUrl) return logoDataUrl;

  const logoResponse = await fetch(new URL('/benji-logo.png', requestUrl));
  if (!logoResponse.ok) {
    throw new Error('Failed to load Benji logo for OG image');
  }
  const buffer = await logoResponse.arrayBuffer();
  const base64 = arrayBufferToBase64(buffer);
  logoDataUrl = `data:image/png;base64,${base64}`;
  return logoDataUrl;
}

function arrayBufferToBase64(buffer: ArrayBuffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;

  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return btoa(binary);
}

export async function GET(
  req: Request,
  { params }: RouteContext<'/og/docs/[...slug]'>,
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  const logoSrc = await ensureLogoDataUrl(req.url);

  return new ImageResponse(
    (
      <DefaultImage
        title={page.data.title}
        description={page.data.description}
        site="Benji"
        primaryColor="rgba(78, 70, 229, 0.35)"
        primaryTextColor="#8C82FF"
        icon={
          <img
            src={logoSrc}
            alt="Benji logo"
            width={72}
            height={72}
            style={{
              borderRadius: '16px',
            }}
          />
        }
      />
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}
