import { PrismaClient } from '@prisma/client';
import { demoProducts } from '../src/lib/demo-data';

const prisma = new PrismaClient();

async function main() {
  await prisma.collection.createMany({
    data: [
      { name: 'Women', slug: 'women' },
      { name: 'Kids', slug: 'kids' },
      { name: 'Baby', slug: 'baby' }
    ],
    skipDuplicates: true
  });

  for (const product of demoProducts) {
    const collection = await prisma.collection.findUnique({ where: { slug: product.collection.toLowerCase() } });
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        title: product.title,
        slug: product.slug,
        description: product.subtitle,
        status: 'ACTIVE',
        collectionId: collection?.id,
        variants: {
          create: product.variants.map((variant) => ({
            sku: variant.id,
            size: variant.label,
            price: variant.price,
            stock: variant.stock
          }))
        },
        images: {
          create: product.images.map((url, index) => ({ url, sort: index }))
        }
      }
    });
  }

  console.log('Seeded demo data.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
