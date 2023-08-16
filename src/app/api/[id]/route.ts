import { NextRequest, NextResponse } from "next/server";
// @ts-ignore
import prisma from '../../../../lib/prisma'

// @ts-ignore
export async function GET(request: NextRequest, { params }) {
    await setTimeout(() => {
        console.log(params)
    }, 300)
    // @ts-ignore
    const title = await prisma.title.findFirst({
        where: { id: params.id }
    })

    return NextResponse.json({
        title
    })
}