import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(req: Request) {
    const { login, password } = await req.json() as {
        login: string,
        password: string
    }
    const admin = await prisma.admin.findUnique({
        where: {
            login: login
        }
    })

    if (admin && admin.password === password) {
        return NextResponse.json({
            isExist: true
        })
    }

    return NextResponse.json({
        isExist: false
    })
}