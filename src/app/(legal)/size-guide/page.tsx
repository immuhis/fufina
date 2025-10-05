export const metadata = { title: 'Size Guide' };

const categories = [
  {
    title: 'Women',
    rows: [
      ['XS', '80', '62', '88'],
      ['S', '84', '66', '92'],
      ['M', '90', '72', '98'],
      ['L', '96', '78', '104']
    ]
  },
  {
    title: 'Kids',
    rows: [
      ['4Y', '56', '52', '60'],
      ['6Y', '60', '54', '64'],
      ['8Y', '64', '56', '70'],
      ['10Y', '68', '58', '74']
    ]
  },
  {
    title: 'Baby',
    rows: [
      ['3M', '-', '43', '44'],
      ['6M', '-', '45', '46'],
      ['9M', '-', '47', '48']
    ]
  }
];

export default function SizeGuidePage() {
  return (
    <div className="container-responsive space-y-6">
      <header>
        <h1 className="section-title">Size guide</h1>
        <p className="text-sm text-charcoal/70">Measurements in centimeters. For assistance, contact our stylists.</p>
      </header>
      <div className="space-y-6">
        {categories.map((category) => (
          <section key={category.title} className="rounded-2xl bg-white p-6 shadow-soft">
            <h2 className="font-heading text-xl text-charcoal">{category.title}</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-rose/10 text-charcoal">
                  <tr>
                    <th className="px-4 py-2">Size</th>
                    <th className="px-4 py-2">Bust</th>
                    <th className="px-4 py-2">Waist</th>
                    <th className="px-4 py-2">Hips</th>
                  </tr>
                </thead>
                <tbody>
                  {category.rows.map((row) => (
                    <tr key={row[0]} className="odd:bg-white even:bg-background/60">
                      {row.map((cell) => (
                        <td key={cell} className="px-4 py-2 text-charcoal/70">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
