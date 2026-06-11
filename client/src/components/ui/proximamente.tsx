import construccionSticker from "/gifs/Under_Construction.gif";

export function Proximamente() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
      <div className="flex items-center justify-center">
        <img
          src={construccionSticker}
          alt="en_construccion"
          className="h-auto w-30 max-w-md rounded-lg"
          crossOrigin="anonymous" 
          draggable={false}
        />
      </div>
        <div>
          <p className="text-2xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
            ¡Estamos trabajando en esta sección!
          </p>
        </div>
    </div>
  )
}
