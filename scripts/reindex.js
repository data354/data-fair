const dbUtils = require('../server/utils/db')

async function main() {
  const { db } = await dbUtils.init()
  await db.collection('datasets').updateMany({}, { $set: { status: 'schematized' } })
}

main().then(() => process.exit())
