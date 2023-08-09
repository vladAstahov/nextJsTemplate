"use client";

import {mainModel, Title} from "@/widgets/main/model";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";

export const TitleInfo = () => {
    const { onFetch, isLoading } = mainModel.useTitle()
    const { id } = useParams()
    const [title, setTitle] = useState<Title>()

    useEffect(() => {
        onFetch(Number(id)).then(response => {
            setTitle(response.title)
        })
    }, [id])

    return (
        <>
            {isLoading && <h3>Loading</h3>}
            {!isLoading && (
                <table>
                    <th>
                        <td>id</td>
                        <td>title</td>
                    </th>
                    <tr>
                        <td>
                            {title?.id}
                        </td>
                        <td>
                            {title?.title}
                        </td>
                    </tr>
                </table>
            )}
        </>
    )
}