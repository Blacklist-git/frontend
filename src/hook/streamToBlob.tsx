const streamToBlob = async (
  stream: ReadableStream<Uint8Array>,
): Promise<Blob> => {
  const chunks: Uint8Array[] = [];
  const reader = stream.getReader();

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    chunks.push(value);
  }

  return new Blob(chunks, { type: "application/pdf" });
};

export default streamToBlob;
