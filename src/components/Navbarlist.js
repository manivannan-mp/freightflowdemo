
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Shows({ subItem, index }) {
  return (
    <div>
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li key={index}>
          <ul role="list" className="-mx-2 space-y-1">
            {!subItem.childrens ? (
              <li key={subItem.name}>
                <div
                  className={classNames(
                    subItem.current ? 'bg-gray-50' : 'hover:bg-gray-300',
                    'flex items-center w-full  text-left ml-4 rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700'
                  )}
                >
                  <Link href={subItem.href}>{subItem.name}</Link>
                </div>
              </li>
            ) : (
              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        subItem.current ? 'bg-red-400' : 'hover:bg-gray-300',
                        'flex items-center w-full  text-left ml-4 rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700'
                      )}
                    >
                        {subItem.name}
                      <ChevronRightIcon
                        className={classNames(
                          open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                          'ml-auto h-5 w-5 shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel as="ul" className="mt-1 px-2 ml-6  p-2 gap-x-3 text-sm leading-6 font-semibold text-slate-700">
                      {subItem.childrens.map((subChildItem, subChildIndex) => (
                        <li key={subChildIndex} className={classNames(
                          subItem.current ? 'bg-red-400' : 'hover:bg-gray-300',
                          'flex items-center w-full  text-left ml-4 rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700'
                        )}>
                        
                            
                            <Link href={subChildItem.href}>{subChildItem.name}</Link>
                    
                        </li>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
}
