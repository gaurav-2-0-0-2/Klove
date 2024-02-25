export function allUsers(_: any, __: any, context: any) {
  return context.prisma.user.findMany();
}

