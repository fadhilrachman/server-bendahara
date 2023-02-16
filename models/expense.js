module.exports = (sequelize, DataTypes) => {
  const expense = sequelize.define(
    "expense",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      tanggal: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      total_pengeluaran: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kategori: {
        type: DataTypes.ENUM,
        values: ["jajan", "kebutuhan", "sedekah"],
        allowNull: false,
      },
      deskripsi: DataTypes.TEXT,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: "pengeluaran",
    }
  );
  return expense;
};
