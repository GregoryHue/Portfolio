import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const techno = await prisma.text.upsert({
    where: { id: 1 },
    update: {
      content: "Techno"
    },
    create: {
      content: "Techno"
    }
  });
  console.log({ techno });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
