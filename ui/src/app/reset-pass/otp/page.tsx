export default function PassResetByCode (){

    return (
        <div className="flex flex-col gap-5 border-2 rounded mt-5 mb-5 justify-center items-center mx-auto w-2/6 p-5">
            <h1 className="text-2xl">Нууц үг сэргээх</h1>
            <div className="flex flex-col w-full max-w-xs gap-3">
                <div>
                    <p className="text-sm text-yellow-600">Таны <span className="text-green-600">example@pinecone.mn</span> хаяг руу сэргээх код илгээх болно. </p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm">Нууц үг сэргээх код</p>
                    <input className="input input-bordered w-full max-w-xs" type="password" placeholder="" />
                </div>
            </div>
            <button className="btn btn-disabled w-full max-w-xs" role="button" aria-disabled="true">Үргэлжлүүлэх</button>
        </div>
    )
}