import './contacts.css'

export default function Contacts() {
  return (
    <>
      <section className='cont-contact'>
        <form action="" className='form-contact'>
            <label htmlFor="">Apellido </label>
            <input type="text" />
            
            <label htmlFor="">Nombre </label>
            <input type="text" />

            <label htmlFor="">Email </label>
            <input type="text" />

            <label htmlFor="">Descripcion </label>
            <input type="text" />

            <button>Enviar!</button>
        </form>


      </section>
    </>
  )
}
