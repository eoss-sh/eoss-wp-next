import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'

export default function Alert({ preview }) {
    return (
        <Container>
            {preview ? (
                <div className="py-2 text-center text-sm">
                    <>
                        This is a page preview.{' '}
                        <Link
                            href="/api/exit-preview"
                            className="underline hover:text-cyan duration-200 transition-colors"
                        >
                            Click here
                        </Link>{' '}
                        to exit preview mode.
                    </>
                </div>
            ) : (
                <></>
            )}
        </Container>
    )
}
