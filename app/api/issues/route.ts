import { request } from "http";
import { NextRequest, NextResponse } from "next/server";
import { string, z } from "zod"
import prisma from "@/prisma/client";

const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: string().min(1).max(255)
})
export const POST = async (request: NextRequest) => {
    const body = await request.json()
    const validate = createIssueSchema.safeParse(body);

    if (!validate.success) {
        return NextResponse.json(validate.error.errors, { status: 400 })
    }

    const issue = await prisma.issue.create({
        data: {
            title: body.title,
            description: body.description
        }
    })
    return NextResponse.json(issue, { status: 201 })
}