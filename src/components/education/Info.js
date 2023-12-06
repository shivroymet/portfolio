import "./Info.css"

export function Info({ info }) {
    return <div>
        <h2 className="lhfw-1n">{info.degree}
            <span className="text-body-secondary"> in {info.course}</span></h2>
        <h3 className="lhfw-1n">{info.university}</h3>
        <p className="medium">{info.graduation}</p>
        <p className="lead description">{info.description}
        </p>
    </div>

}