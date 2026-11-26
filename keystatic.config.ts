import { config, collection, fields } from '@keystatic/core'

// Local mode: the editor at /keystatic (npm run dev only) writes straight into content/ and public/,
// and changes go live by committing them. The public site stays a static export.
export default config({
  storage: { kind: 'local' },
  ui: {
    brand: { name: 'Kenekt' },
  },
  collections: {
    posts: collection({
      label: 'Insights',
      slugField: 'title',
      path: 'content/posts/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      columns: ['title', 'date'],
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Published', defaultValue: { kind: 'today' }, validation: { isRequired: true } }),
        summary: fields.text({
          label: 'Summary',
          description: 'Shown on the Insights list and in search and link previews.',
          multiline: true,
        }),
        author: fields.text({ label: 'Author' }),
        image: fields.image({
          label: 'Cover image',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
        }),
        imageAlt: fields.text({ label: 'Cover image description', description: 'For screen readers and search engines.' }),
        button: fields.object(
          {
            label: fields.text({ label: 'Label' }),
            link: fields.url({ label: 'Link' }),
          },
          { label: 'Button after the article', description: 'Optional. Leave both empty for no button.' },
        ),
        draft: fields.checkbox({
          label: 'Draft',
          description: 'Drafts show when running the site locally but are left out of the live site.',
          defaultValue: false,
        }),
        content: fields.markdoc({
          label: 'Article',
          options: {
            image: {
              directory: 'public/images/posts',
              publicPath: '/images/posts/',
            },
          },
        }),
      },
    }),
  },
})
