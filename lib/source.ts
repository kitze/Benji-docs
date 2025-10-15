import { docs } from '@/.source';
import { type InferPageType, loader, type LoaderPlugin } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';

const flattenFeaturesFolder: LoaderPlugin = {
  name: 'flatten-features-folder',
  enforce: 'post',
  transformPageTree: {
    root(root) {
      if (!root.children) return root;

      const nextChildren: typeof root.children = [];

      for (const child of root.children) {
        if (child.type === 'folder' && child.$id === 'features') {
          nextChildren.push({
            type: 'separator',
            name: child.name ?? 'Features',
            icon: child.icon,
          });
          if (child.children) {
            nextChildren.push(...child.children);
          }
          continue;
        }

        nextChildren.push(child);
      }

      root.children = nextChildren;
      return root;
    },
  },
};

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin(), flattenFeaturesFolder],
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `/og/docs/${segments.join('/')}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title} (${page.url})

${processed}`;
}
