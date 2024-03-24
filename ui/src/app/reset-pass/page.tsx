export default function PassResetByEmail() {
  return (
    <div className="flex flex-col gap-5 border-2 rounded mt-5 mb-5 justify-center items-center mx-auto w-[448px] h-[310px] p-5">
      <h1 className="text-2xl">Нууц үг сэргээх</h1>
      <div className="w-full max-w-xs flex flex-col gap-2">
        <p className="text-sm">Имэйл</p>
        <input
          className="input input-bordered w-full max-w-xs"
          type="email"
          placeholder="Имэйл хаягаа оруулна уу"
        />
      </div>
      <button
        className="btn btn-enabled w-full max-w-xs hover:bg-green-500hover:text-white"
        aria-disabled="true"
        type="submit"
      >
        Үргэлжлүүлэх
      </button>
    </div>
  );
}
