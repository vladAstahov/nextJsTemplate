"use client";

import React, {useCallback, useEffect, useState} from "react";
import {mainModel} from "@/widgets/main/model";
import {useRouter} from "next/navigation";

export const ClientWithFetch = React.memo(() => {
    const { titles, fetch, isLoading } = mainModel.useTitles()
    const { onAdd } = mainModel.useAddTitle()
    const { push } = useRouter()

    const [ value, setValue ] = useState('')

    useEffect(() => {
        fetch().then()
    }, [])

    const onCreate = useCallback( async () => {
        try {
            await onAdd(value)
        } catch (e) {
            console.log(e)
        }
    }, [value, onAdd])

    return (
        <>
            <div>
                <input value={value} onChange={({ target }) => setValue(target.value)} />
                <button onClick={onCreate}>Create</button>
            </div>
            <div>
                {isLoading && <p>Loading</p>}
                {!isLoading && <>
                    {titles.map((title) => (
                        <div onClick={() => push(`/title/${title.id}`)}>
                            <h3>{title.id}</h3>
                            <p>{title.title}</p>
                        </div>
                    ))}
                </>}
            </div>

            {/*<button onClick={() => setId(prevState => prevState + 1)}> Next title </button>*/}
            {/*<button onClick={() => setId(prevState => prevState - 1)}> Prev title </button>*/}
        </>
    )
})