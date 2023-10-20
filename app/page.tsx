import NextLink from "next/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Grid, Col } from "@tremor/react"
import { Card, CardFooter, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
const fs = require('fs');

async function readJSON(path: string) {
	try {
		const data: string = await new Promise((resolve, reject) => {
			fs.readFile(path, 'utf8', (err: any, data: any) => {
				if (err) {
					reject(`Error reading file from disk: ${err}`);
					return;
				}
				resolve(data);
			});
		});
		const jsonData = JSON.parse(data);
		return jsonData;
	} catch (error) {
		console.log(`Error: ?${error}`);
		return null;
	}
}

function count(jsonData: any, str: string) {
	let count = 0
	jsonData.forEach((row: any) => {
		let rowstr = JSON.stringify(row);
		if (rowstr.includes(str)) count++
	})
	return count
}

export default async function Home() {

	const game_summaries = await readJSON('./public/Data/game_summary.json');
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title({ color: 'yellow' })}>Dashboard</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Choose a team to view their stats
				</h2>
			</div>
			<Link href="/c9">
				<Card className="py-4">
					<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
						<p className="uppercase font-bold">Cloud9 Data</p>
						<small className="text-default-500">{count(game_summaries, 'C9')} Games</small>
					</CardHeader>
					<CardBody className="overflow-visible py-2">
						<Image
							alt="Card background"
							className="object-cover rounded-xl"
							src="/images/Cloud9logo_profile.webp"
							width={270}
						/>
					</CardBody>
				</Card>
			</Link>
			<Link href="/gg">
				<Card className="py-4">
					<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
						<p className="uppercase font-bold">GG Data</p>
						<small className="text-default-500">{count(game_summaries, 'GG')} Games</small>
					</CardHeader>
					<CardBody className="overflow-visible py-2">
						<Image
							alt="Card background"
							className="object-cover rounded-xl"
							src="/images/Golden_Guardianslogo_profile.webp"
							width={270}
						/>
					</CardBody>
				</Card>
			</Link>
			{/* example of Tremor Data vis */}
			{/* <Card className="max-w-xs mx-auto">
				<Text>Sales</Text>
				<Metric>$ 71,465</Metric>
				<Flex className="mt-4">
					<Text>32% of annual target</Text>
					<Text>$ 225,000</Text>
				</Flex>
				<ProgressBar value={32} className="mt-2" />
			</Card> */}
			{/* <div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div> */}
		</section>
	);
}
