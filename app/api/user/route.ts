import db from "@/lib/db";
import { User } from "@/types";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = (await req.json()) as User;

    if (!user) {
      return new NextResponse("O usuário é obrigatório", { status: 400 });
    }

    const userToSave = await db.user.create({
      data: {
        locale: user.locale,
        description: user.description,
        isMissed: user.isMissed,
        name: user.name,
        age: user.age,
        createdAt: user.createdAt,
        email: user.email,
        phone: user.phone,
        photoUrl: user.photoUrl,
        updatedAt: user.updatedAt,
        visible: true,
        dateMissing: user.dateMissing,
      },
    });

    return NextResponse.json(
      { success: true, user: userToSave },
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const name = req.nextUrl.searchParams.get("name") ?? "";
    const take = req.nextUrl.searchParams.get("page")
      ? req.nextUrl.searchParams.get("page")
      : 10;
    const skip = req.nextUrl.searchParams.get("limit")
      ? req.nextUrl.searchParams.get("limit")
      : 0;

    const results = await db.user.findMany({
      skip: skip as number,
      take: take as number,
      where: {
        name: {
          contains: name as string,
        },
      },
    });

    return NextResponse.json(
      { success: true, data: results, skip, take },
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}
