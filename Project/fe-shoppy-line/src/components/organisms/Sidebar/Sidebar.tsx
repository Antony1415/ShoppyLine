import { Button, Logo, Text } from '@/components/atoms';
import Image from 'next/image';
import React from 'react'
import { adminMenu, AdminMenuType } from './DummySidebar';

export interface SidebarProps {
    className?: string;
    menu: string,
    setMenu: React.Dispatch<React.SetStateAction<string>>,
}

const Sidebar = ({
    className,
    menu,
    setMenu
}: SidebarProps): React.JSX.Element => {
    return (
        <div className={`${className} flex-[2.3] py-10 flex flex-col items-center border-[2px] border-r-gray-300`}>
            <div className='flex flex-col w-full flex-1 gap-10'>
                <div className='flex gap-4 items-center px-4 justify-center'>
                    <Image alt='' src={'/assets/png/logo.png'} width={60} height={60} />
                    <div className='flex flex-col items-center'>
                        <Logo className='!text-[15px]' />
                        <Logo className='!text-[15px]' text='Ａｄｍｉｎ' />
                    </div>
                </div>

                <div className='flex-1 flex flex-col w-full gap-6'>
                    {adminMenu.map((item: AdminMenuType) => {
                        return (
                        <div className='flex relative px-8 items-center py-[5px]' key={item.id}>
                                {menu === item.id && <div className='absolute left-0 h-full w-fit border-[1px] border-green-600/90 border-r-0 border-l-[7px] border-t-[3px] border-b-[3px] border-t-transparent border-b-transparent' />}

                                <Button className={`flex items-center !p-0 !border-0 gap-5`} onClick={() => setMenu(item.id)}>
                                    <Image alt='' src={item.src ? item.src : '/assets/png/logo.png'} width={25} height={25} />
                                    <Text className={`${menu === item.id ? '!font-semibold text-green-600' : 'text-gray-800'} text-[16px]`} text={item.label} type='a' />
                                </Button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Sidebar