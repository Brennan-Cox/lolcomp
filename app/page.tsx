'use client'
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title({ color: 'yellow' })}>Explore</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Browse the following Data
				</h2>
			</div>
			{/* example of Tremor Data vis */}
			<Card className="max-w-xs mx-auto">
				<Text>Sales</Text>
				<Metric>$ 71,465</Metric>
				<Flex className="mt-4">
					<Text>32% of annual target</Text>
					<Text>$ 225,000</Text>
				</Flex>
				<ProgressBar value={32} className="mt-2" />
			</Card>
			<div className="flex gap-3">
				<Link
					isExternal
					as={NextLink}
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Documentation
				</Link>
				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div>
		</section>
	);
}
