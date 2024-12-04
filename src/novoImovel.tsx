import { NavLink } from 'react-router'
import returnButtonImg from './assets/return.png'

export default function NovoImovel() {
    return (
        <div className='w-screen h-screen flex flex-col'>
            <header className='w-full flex p-4'>
                <NavLink to='/'>
                    <img className='' src={returnButtonImg} alt="" />
                </NavLink>
            </header>
            <main className='flex flex-col px-4 gap-4'>
                <h2 className='text-2xl'>Para começarmos, precisamos de alguns dados</h2>
                <input className='border h-16 px-4 rounded' type="text" placeholder='Nome do imóvel' name="" id="" />
                <p className='text-sm'>O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede</p>
                <div className='flex flex-col items-end'>
                    <input className='border w-full h-16 px-4 rounded' type="text" placeholder='Descrição' />
                    <p className='top-14'>0/250</p>
                </div>
                <input className='border h-16 px-4 rounded' type="text" placeholder='CEP' />
                <input className='border h-16 px-4 rounded' type="text" placeholder='Endereço' />
                <div className='flex justify-between items-center'>
                    <input className='border w-3/6 h-16 px-4 rounded' type="text" placeholder='Número' />
                    <input className='border w-5/12 h-16 px-4 rounded' type="text" placeholder='Complemento' />
                </div>
                <div className='flex justify-between items-center'>
                    <input className='border w-3/5 h-16 px-4 rounded' type="text" placeholder='Cidade' />
                    <select className='border w-4/12 h-16 px-4 text-slate-400 rounded'  name="UF" id="">
                    <option value="select">UF</option>
                    </select>
                </div>
                <NavLink to='/' className='bg-upurple flex items-center justify-center rounded-xl text-white p-4'>Continuar</NavLink>
            </main>
        </div>
    )
}