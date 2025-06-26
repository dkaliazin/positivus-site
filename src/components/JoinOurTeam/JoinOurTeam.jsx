import css from './JoinOurTeam.module.css';
const JoinOurTeam = ({ img, alt, title, text, btn }) => {
    return (
        <section className={css.joinourteam}>
            <div className={css.textbox}>
                <h3>{title}</h3>
                <p>{text}</p>
                <button className={css.btn}>{btn}</button>
            </div>
            <img src={img} alt={alt} />
        </section>
    )
}
export default JoinOurTeam;