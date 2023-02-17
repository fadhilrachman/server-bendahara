module.exports = (sequelize, DataTypes) => {
  const income = sequelize.define(
    "income",
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
      total_pemasukan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kategori: {
        type: DataTypes.ENUM,
        values: ["jajan", "kebutuhan", "sedekah"],
        allowNull: false,
      },
      deskripsi: DataTypes.TEXT,
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "pemasukan",
    }
  );
  return income;
};
