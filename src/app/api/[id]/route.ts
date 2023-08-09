import {NextRequest, NextResponse} from "next/server";
import prisma from '../../../../lib/prisma'

export async function GET(request: NextRequest, { params }) {
    await setTimeout(() => {
        console.log(params)
    }, 300)
    const title = await prisma.title.findFirst({
        where: {id: params.id}
    })

    return NextResponse.json({
        title
    })
}