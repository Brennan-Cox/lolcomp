import { Image } from "@nextui-org/image";
import { GridDisplay } from "./grid";
import { Champs } from "./favchamps";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { WardMap } from "./wardmap";

export function TeamPage( props : any) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 lg-screen-w">
			<div className="inline-block max-w-lg text-center justify-center">
				<div className="flex flex-col items-center justify-center gap-4">
					<Image className="items-center justify-center py-4" src={props.teamLogo} width={270} />
				</div>
				<GridDisplay
					numItems={2}
					numItemsSm={0}
					numItemsMd={1}
					numItemsLg={1}
				>
					<Card className="py-4">
						<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
							<p className="uppercase font-bold">Ward Placement</p>
						</CardHeader>
						<CardBody className="overflow-visible py-2">
							<WardMap team={props.team} />
						</CardBody>
					</Card>
					<Card className="py-4">
						<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
							<p className="uppercase font-bold">Favorite Champions for each team member</p>
						</CardHeader>
						<CardBody className="overflow-visible py-2">
                            <p>
                                This section was meant to show every champion the members that play with the champion the roles the champion is used with and the win rate of each champion to help the user understand what champions to ban from the other team or build a strategy on how to defeat them.
                            </p>
							<Champs team={props.team} />
						</CardBody>
					</Card>
				</GridDisplay>
			</div>
		</section>
	);
}