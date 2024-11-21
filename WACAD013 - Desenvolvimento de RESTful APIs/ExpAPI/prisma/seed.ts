import { PrismaClient } from "@prisma/client";
import { UserTypes } from "../src/resources/userType/userType.constants";

const prisma = new PrismaClient();

async function main() {
  return prisma.userType.createMany({
    data: [
      { id: UserTypes.admin, label: "admin" },
      { id: UserTypes.client, label: "cliente" },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
