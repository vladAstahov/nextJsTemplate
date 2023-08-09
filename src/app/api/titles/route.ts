import prisma from '../../../../lib/prisma'
import {NextResponse} from "next/server";

export async function GET(req, {params}) {
    const titles = await prisma.title.findMany()

    return NextResponse.json({
        titles
    })
}

export async function POST(req) {
    if (req.method === 'POST') {
        console.log(req.body)
        const body = JSON.parse(req.body)
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