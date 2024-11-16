import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
export const client = sanityClient({
  projectId: 'nw3zpjls',
  dataset: 'production',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_KEY,
})
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
