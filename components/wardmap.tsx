import React from 'react';
import { ChildProcess, exec } from 'child_process';
import { Image } from '@nextui-org/image'
import { CircularProgress } from "@nextui-org/progress";

export async function WardMap(props: any) {
    const pythonCommand = `python ./Scripts/buildWardPlot.py ${props.team}`
    let imageLoaded = false
    imageLoaded = await new Promise((resolve, reject) => {
        exec(pythonCommand, (err, stdout, stderr) => {
            if (err) {
                console.error(err, 'error in calling python script')
                reject(err)
            }
            console.log(stdout)
            if (stderr) {
                console.error(stderr, 'error output from python script')
                reject(stderr)
            }
            if (stdout) {
                resolve(true)
            }
        })
    })

    return (
        <div>
            {imageLoaded ? (
                <Image
                    src='/images/ward_plot.png'
                    alt="Ward Plot"
                />
            ) : (
                <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                    <CircularProgress aria-label='Loading...' />
                </div>
            )}
        </div>
    );
}