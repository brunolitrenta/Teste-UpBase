import returnButtonImg from './assets/return.png'
import plusButtonImg from './assets/plus.png'
import sadFaceImg from './assets/sadface.png'
import buildImg from './assets/building.png'
import calendarImg from './assets/calendar.png'
import listImg from './assets/list.png'
import userImg from './assets/user.png'
import { NavLink } from 'react-router'

function TelaImoveis() {

  return (
    <div className='w-screen h-screen flex flex-col justify-between'>
      <header className='w-full flex justify-between p-4'>
        <a href="">
          <img className='' src={returnButtonImg} alt="" />
        </a>
        <a href="" className='flex items-center'>
          <img src={plusButtonImg} alt="" />
          <p className='text-upurple font-bold'>Cadastrar imóvel</p>
        </a>
      </header>
      <main className='flex flex-col h-5/6 px-4 gap-y-32'>
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-2xl'>Bem-vindo, Bruno!</h2>
          <div className='flex justify-between w-2/3'>
            <a className='bg-upurple rounded-lg px-2 text-white' href="">Todos os flats</a>
            <a className='rounded-lg px-2 text-black-800 border border-black-300' href="">Indisponíveis</a>
          </div>
        </div>
        <div className='h-1/3 flex flex-col items-center justify-between text-center'>
          <img className='w-12 h-12' src={sadFaceImg} alt="" />
          <h3 className='text-xl font-bold'>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</h3>
          <NavLink to='/novo' className='border border-upurple p-2 w-full rounded-lg text-upurple font-bold text-sm'>Cadastrar meu primeiro imóvel</NavLink>
        </div>
      </main>
      <footer className='flex items-center p-4 justify-around h-1/6 bg-upurple rounded-t-xl'>
        <a href=""><img className='w-10 h-10' src={buildImg} alt="" /></a>
        <a href=""><img className='w-10 h-10' src={calendarImg} alt="" /></a>
        <a href=""><img className='w-10 h-10' src={listImg} alt="" /></a>
        <a href=""><img className='w-10 h-10' src={userImg} alt="" /></a>
      </footer>
    </div>
  )
}

export default TelaImoveis
