interface VideoProps {
  url: string;
  title?: string;
  width?: number;
  height?: number;
}

// Compat shim for cognition-university's <Video> MDX component.
// Accepts YouTube / Loom / Vimeo / Wistia URLs and renders an iframe embed.
export function Video({ url, title }: VideoProps) {
  const embedSrc = toEmbedUrl(url);
  if (!embedSrc) return null;

  return (
    <div className="my-6 aspect-video w-full overflow-hidden rounded-lg bg-black">
      <iframe
        src={embedSrc}
        title={title ?? "Embedded video"}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function toEmbedUrl(url: string): string | null {
  // YouTube — youtu.be/ID or youtube.com/watch?v=ID
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]{11})/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;

  // Loom — loom.com/share/ID
  const loom = url.match(/loom\.com\/share\/([a-f0-9]+)/);
  if (loom) return `https://www.loom.com/embed/${loom[1]}`;

  // Vimeo — vimeo.com/ID
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;

  // Wistia — wistia.com/medias/ID
  const wistia = url.match(/wistia\.com\/medias\/([a-z0-9]+)/);
  if (wistia) return `https://fast.wistia.net/embed/iframe/${wistia[1]}`;

  // Already an embed URL or unknown — pass through.
  if (url.includes("/embed/")) return url;
  return null;
}
