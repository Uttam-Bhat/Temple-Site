import React from 'react'
import { FaPhone } from 'react-icons/fa'
import './Page.css'

const Committee = () => {
  // TODO: Replace with actual committee member information
  const committeeMembers = [
    {
      id: 1,
      slNo: 1,
      name: "Committee Member 1",
      role: "President",
      number: "+91 1234567890"
    },
    {
      id: 2,
      slNo: 2,
      name: "Committee Member 2",
      role: "Vice President",
      number: "+91 1234567891"
    },
    {
      id: 3,
      slNo: 3,
      name: "Committee Member 3",
      role: "Secretary",
      number: "+91 1234567892"
    },
    {
      id: 4,
      slNo: 4,
      name: "Committee Member 4",
      role: "Treasurer",
      number: "+91 1234567893"
    },
    {
      id: 5,
      slNo: 5,
      name: "Committee Member 5",
      role: "Joint Secretary",
      number: "+91 1234567894"
    },
    {
      id: 6,
      slNo: 6,
      name: "Committee Member 6",
      role: "Member",
      number: "+91 1234567895"
    },
    {
      id: 7,
      slNo: 7,
      name: "Committee Member 7",
      role: "Member",
      number: "+91 1234567896"
    },
    {
      id: 8,
      slNo: 8,
      name: "Committee Member 8",
      role: "Member",
      number: "+91 1234567897"
    }
  ]

  return (
    <div className="page">
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">Committee Members</h1>
          
          <p className="page-intro">
            The temple is managed by a dedicated committee of volunteers who work 
            tirelessly to ensure the smooth functioning of all temple activities and 
            maintain the spiritual atmosphere for devotees.
          </p>
          
          <div className="committee-table-wrapper">
            <table className="committee-table">
              <thead>
                <tr>
                  <th>SL No</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Contact Number</th>
                </tr>
              </thead>
              <tbody>
                {committeeMembers.map((member) => (
                  <tr key={member.id}>
                    <td className="sl-no-cell">{member.slNo}</td>
                    <td className="name-cell">{member.name}</td>
                    <td className="role-cell">
                      <span className="role-badge">{member.role}</span>
                    </td>
                    <td className="number-cell">
                      <a href={`tel:${member.number}`} className="phone-link">
                        <FaPhone className="phone-icon" />
                        {member.number}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Committee



