import type { PetshopService } from "../../../petshopService/types/PetshopService"
import { formatDate } from "../../../../utils/dateFormatter";

interface Props {
  service: PetshopService;
}

export function ServicesTableRow({ service }: Props) {
  return (
    <tr className="border-b border-border hover:bg-primary/5 transition-colors">
      <td className="p-4">
        <span
          className="bg-primary/10 text-foreground py-1 px-3 rounded-full text-xs font-semibold"
        >
          {service.type}
        </span>
      </td>

      <td className="p-4 text-muted-foreground">
        {service.clientId}
      </td>

      <td className="p-4 text-muted-foreground">
        {service.petId}
      </td>

      <td className="p-4 text-muted-foreground">
        {formatDate(service.createdAt)}
      </td>

      <td className="p-4 text-muted-foreground">
        {formatDate(service.executionDate)}
      </td>
    </tr>
  )
}