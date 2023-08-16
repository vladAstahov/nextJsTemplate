// @ts-ignore
import prisma from '../../../../lib/prisma'
import { NextRequest, NextResponse } from "next/server";

// @ts-ignore
export async function GET(req: NextRequest, { params }) {
    // @ts-ignore
    const titles = await prisma.title.findMany()

    return NextResponse.json({
        titles
    })
}

// @ts-ignore
export async function POST(req) {
    if (req.method === 'POST') {
        console.log(req.body)
        const body = JSON.parse(req.body)
        // @ts-ignore
        const result = await prisma.title.create({
            data: {
                title: body.title
            }
        })

        return NextResponse.json({
            result
        })
    }

}