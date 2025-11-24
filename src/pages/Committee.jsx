import React from 'react'
import { FaPhone } from 'react-icons/fa'
import './Page.css'

const Committee = () => {
  const committeeMembers = [
    {
      id: 1,
      slNo: 1,
      name: "Narayan Shanbhag",
      role: "President",
      number: "+91 8105451480"
    },
    {
      id: 2,
      slNo: 2,
      name: "Prakash Bhat",
      role: "Vice President",
      number: "+91 9972274858"
    },
    {
      id: 3,
      slNo: 3,
      name: "Shrisha Bhat",
      role: "Secretary",
      number: "+91 9740088055"
    },
    {
      id: 4,
      slNo: 4,
      name: "Ganesh Pai",
      role: "Joint Secretary",
      number: "+91 7715956497"
    },
    {
      id: 5,
      slNo: 5,
      name: "Ramdas Nayak",
      role: "Treasurer",
      number: "+91 8105169905"
    },
    {
      id: 6,
      slNo: 6,
      name: "Damodhar Prabhu",
      role: "Member",
      number: "+91 9663437527"
    },
    {
      id: 7,
      slNo: 7,
      name: "Balakrishna Bhat",
      role: "Member",
      number: "+91 9945991174"
    },
    {
      id: 8,
      slNo: 8,
      name: "Ganesh Rai Prabhu",
      role: "Member",
      number: "+91 7899706104"
    },
    {
      id: 9,
      slNo: 9,
      name: "Uday Bhat",
      role: "Member",
      number: "+91 9448350479"
    },
    {
      id: 10,
      slNo: 10,
      name: "Vinayak Kamath",
      role: "Member",
      number: "+91 9591893597"
    },
    {
      id: 11,
      slNo: 11,
      name: "Shashi Shenoy",
      role: "Member",
      number: "+91 9242717347"
    },
    {
      id: 12,
      slNo: 12,
      name: "Vedavyas Prabhu",
      role: "Member",
      number: "+91 9741848091"
    },
    {
      id: 13,
      slNo: 13,
      name: "Shrinivas Shanbhag",
      role: "Member",
      number: "+91 9620295737"
    },
    {
      id: 14,
      slNo: 14,
      name: "Uday Kini",
      role: "Member",
      number: "+91 9241668778"
    },
    {
      id: 15,
      slNo: 15,
      name: "Harish Prabhu",
      role: "Member",
      number: "+91 9141229567"
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



