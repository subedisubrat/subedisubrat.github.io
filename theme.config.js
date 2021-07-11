const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block' }}>
      <time>{YEAR}</time> © Subrat Subedi
      <style jsx>{`
        a {
          float: right;
        }
      `}</style>
    </small>
  )
}
