import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Products() {
    const { id } = useParams();
    const [data] = useState([
        ['modelo: Iphone 13 Pro Max, armazanamento: 124gb, Câmera: 12MP dual, Preço: 4789.99'],
        ['modelo: Iphone 15 Pro Max, armazanamento: 512gb, Câmera: 16MP dual, Preço: 7889.99'],
        ['modelo: Iphone 12 Mini, armazanamento: 256gb, Câmera: 12MP dual, Preço: 3989.99'],
    ])
    return (
    <div>
        <div className="w-full h-screen bg-slate-50 py-10 ">
                <p className="flex justify-center text-3xl font-medium">Lista de Produtos</p>
                <p className="flex justify-center mt-5">{data[id]}</p>
        </div>
    </div>
  )
}
