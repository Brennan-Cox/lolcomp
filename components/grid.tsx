'use client'
import { Grid, Col } from "@tremor/react"

export const GridDisplay = (props: any) => {
    return (
        <Grid
            numItems={props.numItems}
            numItemsSm={props.numItemsSm}
            numItemsMd={props.numItemsMd}
            numItemsLg={props.numItemsLg}
            className="gap-2"
        >
            <Col numColSpan={props.numItems}
                numColSpanLg={props.numItems}
            >
                {props.children}
            </Col>
        </Grid>
    )
}