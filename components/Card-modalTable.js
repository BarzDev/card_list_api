const ModalTable = ({ hero }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr className="">
            <th className="text-green-600 text-base">Match</th>
            <th className="text-blue-600 text-base">Picked</th>
            <th className="text-yellow-500 text-base">Win</th>
            <th className="text-rose-600 text-base">Banned</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>Profesional</td>
            <td>{hero.pro_pick.toLocaleString()}</td>
            <td>{hero.pro_win.toLocaleString()}</td>
            <td>{hero.pro_ban.toLocaleString()}</td>
          </tr>
          {/* row 2 */}
          <tr>
            <td>Public </td>
            <td>{hero.pub_pick.toLocaleString()}</td>
            <td>{hero.pub_win.toLocaleString()}</td>
            <td>-</td>
          </tr>
          {/* row 3 */}
          <tr>
            <td>Turbo</td>
            <td>{hero.turbo_picks.toLocaleString()}</td>
            <td>{hero.turbo_wins.toLocaleString()}</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ModalTable;
