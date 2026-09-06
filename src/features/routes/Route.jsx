import { routes } from "./data/Routes";
import { BusLineDetail } from "./pages/BuslineDetail";

export default function Route() {
    return (
        <div>
            <BusLineDetail routesData={routes} />
        </div>
    );
}
