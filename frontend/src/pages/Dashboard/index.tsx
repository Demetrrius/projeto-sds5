import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function Dashboard() {
    return (
        <>
            <NavBar />
            <div className='container'>
                <h1 className="text-primary py-1">Bem-vindo(a) à semana do "Spring React"!</h1>
                <h3 className="py-1" ><b>Dashborad de Vendas</b></h3>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5>Taxa de Sucesso(%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5>Taxa de Sucesso(%)</h5>
                        <DonutChart />
                    </div>
                    <div>
                        <h3 className="py-1" ><b>Todas as Vendas</b></h3>          </div>
                </div>
                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
