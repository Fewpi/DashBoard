import { CircleDollarSign, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export function Sales(){
    return(
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Overview Vendas
                    </CardTitle>
                    <CircleDollarSign className="ml-auto h-4 w-4"/>
                </div>
                <CardDescription>
                Novos Clientes nas Ultimas 24 horas
                </CardDescription>
            </CardHeader>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2 ">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/fewpi.png"/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Programador</p>
                        <span className="text-[12px] sm:text-sm">teste@gmail.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2 ">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/fewpi.png"/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Programador</p>
                        <span className="text-[12px] sm:text-sm">teste@gmail.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2 ">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/fewpi.png"/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Programador</p>
                        <span className="text-[12px] sm:text-sm">teste@gmail.com</span>
                    </div>
                </article>
            </CardContent>

        </Card>
    )
}