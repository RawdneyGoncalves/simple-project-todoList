import './styles.css'

type CardProps = {
    tittle: String;
}


export default function Card({ tittle }: CardProps) {
return(
    <div className="card">
<h2>fazer café</h2>
<div className="card-buttons">
    <button>Completar</button>
    <button>Deletar</button>
</div>


    </div>
)
}
