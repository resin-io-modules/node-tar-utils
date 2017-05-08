declare module 'tar-stream' {
		export interface TarHeader {
					name: string
					size?: number
					mode?: string
					mtime?: Date
					type?: string
					linkname?: string
					uid?: number
					gid?: number
					uname?: string
					gname?: string
					devmajor?: number
					devminor?: number
				}

		export function extract(): NodeJS.ReadWriteStream

		export interface Pack extends NodeJS.ReadableStream {
					entry(header: TarHeader, data: string): void
						entry(header: TarHeader, data: Buffer): void
						entry(header: TarHeader, cb: (err: Error) => void): NodeJS.WritableStream
					finalize(): void

						pipe(stream: NodeJS.WritableStream): NodeJS.ReadWriteStream
				}

		export function pack(): Pack

}


