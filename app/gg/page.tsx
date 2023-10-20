import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { color } from "framer-motion";
import { Image } from "@nextui-org/image";
import { GridDisplay } from "@/components/grid";
import { Champs } from "@/components/favchamps";
import { TeamPage } from "@/components/teampage";
import { WardMap } from "@/components/wardmap";

export default function Page(props: any) {
	return (
		<TeamPage
			teamLogo="/images/Golden_Guardianslogo_profile.webp" 
			team='GG'/>
	);
}