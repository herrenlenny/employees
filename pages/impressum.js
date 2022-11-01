import styles from "./impressum.module.css"

export default function Impressum() {
    return (
        <div className={styles.impressum}>
            <p><strong>Impressum</strong></p>
            <p>Anbieter:<br/>Max Mustermann<br/>Musterstraße 1<br/>3250 Lyss</p>
            <p>Kontakt:<br/>Telefon: 089/1234567-8<br/>Telefax: 089/1234567-9<br/>E-Mail: mail@mustermann.de<br/>Website:
                www.mustermann.de</p>
            <p></p>
            <p>Bei redaktionellen Inhalten:</p>
            <p>Verantwortlich nach § 55 Abs.2 RStV<br/>Lenny Herren<br/>Musterstraße 2<br/>3250 Lyss</p>
        </div>
    )
}
