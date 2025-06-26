import { ChartOverview } from "@/components/Chart"
import { Sales } from "@/components/Sales"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Percent, Users } from "lucide-react"

export const Page = () => {
  return(
    <main className="sm:ml-14 p-4 ">  
      <h1 className="text-2xl">DashBoard</h1>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                Total de Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4 "/>
            </div>
            <CardDescription>
              Total de Vendas em 90 Dias
            </CardDescription>
          </CardHeader>
          <CardContent>
              <p className="text-base sm:text-lg font-bold">R$40.000</p>
          </CardContent>
        </Card>

         <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                Novos Clientes
              </CardTitle>
              <Users className="ml-auto w-4 h-4 "/>
            </div>
            <CardDescription>
              Total de Clientes em 90 Dias
            </CardDescription>
          </CardHeader>
          <CardContent>
              <p className="text-base sm:text-lg font-bold">245</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                Pedidos Hoje
              </CardTitle>
              <Percent className="ml-auto w-4 h-4 "/>
            </div>
            <CardDescription>
              Total de Pedidos Hoje
            </CardDescription>
          </CardHeader>
          <CardContent>
              <p className="text-base sm:text-lg font-bold">63</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                Total Pedidos
              </CardTitle>
              <Users className="ml-auto w-4 h-4 "/>
            </div>
            <CardDescription>
              Total de Pedidos em 90 Dias
            </CardDescription>
          </CardHeader>
          <CardContent>
              <p className="text-base sm:text-lg font-bold">2.400</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4 ">
        <ChartOverview/>
        <Sales/>
      </section>
    </main>
  )
}

export default Page