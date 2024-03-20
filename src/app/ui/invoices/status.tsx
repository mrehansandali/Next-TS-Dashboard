type Props = {
    status: String,
}

const InvoiceStatus = ({ status }: Props) => {
    let className = 'inline-flex items-center rounded full px-2 py-1 text-sm'

    if(status === 'pending'){
        className += 'bg-gray-100 text-gray-500'
    } else if (status === 'paid'){
        className += 'bg-green-500 text-white'
    }

    return (
        // <span className={clsx("inline-flex items-center rounded full px-2 py-1 text-sm",
        //     {
        //         'bg-gray-100 text-gray-500': status === 'pending',
        //         'bg-green-500 text-white': status === 'paid'
        //     },
        // )}>
        // </span>
        <span className={className}>

        </span>
    )
}

export default InvoiceStatus